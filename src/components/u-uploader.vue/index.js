import i18n from './i18n';

const SIZE_UNITS = {
    kB: 1024,
    MB: Math.pow(1024, 2),
    GB: Math.pow(1024, 3),
    TB: Math.pow(1024, 4),
};

export const UUploader = {
    name: 'u-uploader',
    i18n,
    props: {
        url: String,
        dataType: { type: String, default: 'json' },
        data: { type: Object, default: () => ({}) },
        name: { type: String, default: 'file' },
        extensions: { type: [String, Array], default: '' },
        maxSize: { type: [String, Number], default: Infinity },
        disabled: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        isPreviewFile: { type: Boolean, default: false },
        drag: { type: Boolean, default: false },
        dragDefaulted: { type: Boolean, default: false },
    },
    data() {
        return {
            contentType: 'multipart/form-data',
            sending: false,
            file: {},
            tempId: new Date().getTime(),
            isFileReaderSupported: false,
            previewFileContent: [],
            previewLoding: true,
        };
    },
    created() {
        this.isFileReaderSupported = window.FileReader !== 'undefined';
    },
    methods: {
        /**
         * @method upload() 弹出文件对话框并且上传文件
         * @public
         * @return {void}
         */
        upload() {
            if (this.disabled || this.sending)
                return;

            this.$refs.file.value = '';
            this.$refs.file.click();
        },
        /**
         * @method checkExtensions(file) 检查扩展名
         * @private
         * @param  {File} file 文件对象
         * @return {boolean} 返回是否通过验证
         */
        checkExtensions(file) {
            if (!this.extensions)
                return true;

            const fileName = file.name;
            const extName = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();

            let extensions = this.extensions;
            if (typeof extensions === 'string')
                extensions = extensions.split(',');

            if (extensions.includes(extName))
                return true;

            /**
             * @event error 上传错误时触发
             * @property {object} name ExtensionError
             * @property {object} message 错误信息
             * @property {object} extensions 可上传的扩展名
             */
            this.$emit('error', {
                name: 'ExtensionError',
                message: this.$t('extensionError', { extensions: extensions.join(', ') }),
                extensions,
            }, this);

            return false;
        },
        /**
         * @method checkSize(file) 检查文件大小
         * @private
         * @param  {File} file 文件对象
         * @return {boolean} 返回是否通过验证
         */
        checkSize(file) {
            if (this.maxSize === Infinity)
                return true;

            let maxSize;
            if (!isNaN(this.maxSize))
                maxSize = +this.maxSize;
            else {
                const unit = this.maxSize.slice(-2);
                if (!SIZE_UNITS[unit])
                    throw new Error('Unknown unit!');

                maxSize = this.maxSize.slice(0, -2) * SIZE_UNITS[unit];
            }

            if (file.size <= maxSize)
                return true;

            /**
             * @event error 上传错误时触发
             * @property {object} name SizeError
             * @property {object} message 错误信息
             * @property {object} maxSize 可上传的最大文件大小
             * @property {object} size 当前文件大小
             */
            this.$emit('error', {
                name: 'SizeError',
                message: '文件大小超出限制！',
                maxSize: this.maxSize,
                size: file.size,
            }, this);

            return false;
        },
        /**
         * @method addFiles() 导入批量文件，并查看是否支持FileReader
         * @private
         * @return {void}
         */
        addFiles() {
            const selectFiles = this.$refs.file.files;
            // 允许多次加载同一文件数次
            this.$refs.file.type = 'text';
            for (let i = 0; i < selectFiles.length; i++) {
                this.isFileReaderSupported ? this.addFile(selectFiles[i]) : this.submit(selectFiles[i]);
            }
            this.$refs.file.type = 'file';
        },
        /**
         * @method addFile() 支持FileReader情况下，单一文件处理
         * @private
         * @param  {File} file 文件对象
         * @return {void}
         */
        addFile(file) {
            const fileName = file.name;
            const reader = new FileReader(); 
            if(/\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/gi.test(fileName)) {
                reader.readAsDataURL(file);
            } else {
                reader.readAsBinaryString(file);
            }     
            const that = this;
            const obj = {};
            obj.name = fileName;
            reader.onload = function(evt) {
                obj.src = evt.target.result;
                that.previewFileContent.push(obj);
            }
            this.submit(file, obj);
        },
        /**
         * @method dragenter() 拖拽dragenter事件
         * @private
         * @return {void}
         */
        dragenter(evt) {
            evt.stopPropagation();
            evt.preventDefault();
        },
        /**
         * @method dragover() 拖拽dragover事件
         * @private
         * @return {void}
         */
        dragover(evt) {
            evt.stopPropagation();
            evt.preventDefault();
        },
        /**
         * @method drop() 拖拽drop事件
         * @private
         * @return {void}
         */
        drop(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            const dt = evt.dataTransfer;
            const files = dt.files;
            for(let i = 0; i < files.length; i++) {
                this.isFileReaderSupported ? this.addFile(files[i]) : this.submit(files[i]);
            }
        },
        /**
         * @method submit() 提交表单
         * @private
         * @return {void}
         */
        submit(f) {
            // const file = this.$refs.file.files ? this.$refs.file.files[0] : {
            //     name: this.$refs.file.value,
            //     size: 0,
            // };
            const file = f;

            if (!file || !file.name || !this.checkExtensions(file) || !this.checkSize(file))
                return;
 
            const fileName = file.name;
            this.file = {
                name: fileName,
                extName: fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase() : undefined,
                size: file.size,
            };
            if(!this.isFileReaderSupported) {
                let obj = {};
                obj.alt = fileName;
                obj.name = fileName;
                this.previewFileContent.push(obj);
            }

            if (typeof FormData === 'undefined') { // IE9 不支持 XHR2 相关功能
                /**
                 * @event sending 发送前触发
                 * @property {object} data 待发送的数据
                 */
                let cancel = false;
                this.$emit('before-send', {
                    data: this.data,
                    file,
                    // files: this.$refs.file.files,
                    preventDefault: () => cancel = true,
                }, this);
                if (cancel)
                    return;

                this.sending = true;               
                if(o) o.loading = 100;
                // this.$refs.form.submit();
            } else {
                const xhr = new XMLHttpRequest();
                const formData = new FormData(this.$refs.form);

                xhr.open('POST', this.url);
                xhr.upload.onprogress = function (e) {
                    if (e.lengthComputable) {
                        /**
                        * @event progress 发送中触发
                        * @property {object} data 待发送的数据
                        */
                        this.$emit('progress', {
                            loaded: e.loaded,
                            total: e.total,
                        }, this);
                    }
                }.bind(this);

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200){
                            this.onLoad(xhr.responseText, xhr.responseXML);
                            setTimeout(() => this.previewLoding = false, 1000);
                        }
                        else {
                            if (!this.sending)
                                return;
                            this.sending = false;
                            this.file = null;
                            this.$emit('error', {
                                name: 'ResponseError',
                                message: 'No responseText!',
                            }, this);
                        }
                    }
                };

                /**
                 * @event sending 发送前触发
                 * @property {object} data 待发送的数据
                 */
                let cancel = false;
                this.$emit('before-send', {
                    data: this.data,
                    file,
                    files: this.$refs.file.files,
                    xhr,
                    formData,
                    preventDefault: () => cancel = true,
                }, this);
                if (cancel)
                    return;

                this.sending = true;
                xhr.send(formData);
            }

            this.$emit('send', {
                data: this.data,
                file,
                files: this.$refs.file.files,
            }, this);
        },
        /**
         * @method onLoad() 接收数据回调
         * @private
         * @return {void}
         */
        onLoad(responseText, responseXML) {
            const $iframe = this.$refs.iframe;
            const file = this.file;

            if (!this.sending)
                return;
            this.sending = false;
            this.file = null;

            const xml = {};

            if (!!responseText || !!responseXML) {
                // ajax上传时数据处理
                xml.responseText = responseText;
                xml.responseXML = responseXML;
            } else {
                if ($iframe.contentWindow) {
                    xml.responseText = $iframe.contentWindow.document.body ? $iframe.contentWindow.document.body.innerText : null;
                    xml.responseXML = $iframe.contentWindow.document.XMLDocument ? $iframe.contentWindow.document.XMLDocument : $iframe.contentWindow.document;
                } else if ($iframe.contentDocument) {
                    xml.responseText = $iframe.contentDocument.document.body ? $iframe.contentDocument.document.body.innerText : null;
                    xml.responseXML = $iframe.contentDocument.document.XMLDocument ? $iframe.contentDocument.document.XMLDocument : $iframe.contentDocument.document;
                }
            }

            if (!xml.responseText) {
                /**
                 * @event error 上传错误时触发
                 * @property {object} name ResponseError
                 * @property {object} message 错误信息
                 */
                return this.$emit('error', {
                    name: 'ResponseError',
                    message: 'No responseText!',
                }, this);
            }

            /**
             * @event complete 上传完成时触发
             * @property {object} xml 返回的xml
             */
            this.$emit('complete', {
                xml,
            }, this);

            /**
             * @event success 上传成功时触发
             * @property {object} data 返回的数据
             */
            this.$emit('success', {
                data: this.parseData(xml, this.dataType),
                file,
            }, this);
        },
        /**
         * @method parseData(xml, type) 解析接收的数据
         * @private
         * @param  {object} xml 接收的xml
         * @param  {object} type 数据类型
         * @return {object|string} 解析后的数据
         */
        parseData(xml, type) {
            if (type === 'text')
                return xml.responseText;
            else if (type === 'xml')
                return xml.responseXML;
            else if (type === 'json') {
                let data = xml.responseText;
                try {
                    data = JSON.parse(data);
                } catch (e) { }

                return data;
                // danger，暂时不开启
                // } else if (type === 'script')
                //     return eval(xml.responseText);
            } else
                return xml.responseText;
        },
    },
};

export default UUploader;
