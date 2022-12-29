import axios from "axios";
import { forwardRef, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { isEmpty } from "utils/isEmpty";

// Image Resize Module
import Quill from "quill";
import VideoResize from 'quill-video-resize-module2';
import ImageResize from "quill-image-resize-module-react";

Quill.register('modules/ImageResize', ImageResize);
Quill.register('modules/VideoResize', VideoResize);
export const PostEditer = forwardRef((props, ref) => {
    const [contents, setContents] = useState("");

    const imageHandler = useMemo(() => {
        const input = document.createElement("input");
        const formData = new FormData();
        let url = "";

        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");

        input.onchange = async () => {
            const file = input.files;
            if (file !== null) {
                formData.append("image", file[0]);

                try {
                    const res = axios.get("https://reqres.in/api/users/2");

                    //url = res.data.url;
                    url = "https://images.unsplash.com/photo-1664574654529-b60630f33fdb";

                    const range = ref.current?.getEditor().getSelection()?.index;
                    if (!isEmpty(range)) {
                        let quill = ref.current?.getEditor();
                        quill?.setSelection(range, 1);
                        quill?.clipboard.dangerouslyPasteHTML(range, `<img src=${url} alt="이미지 태그가 삽입됩니다." />`);
                    }

                    return { ...res, success: true };
                } catch (error) {
                    const err = error;
                    return { ...err.response, success: false };
                }
            }
        };
    }, [ref]);

    const modules = useMemo(() => ({
        ImageResize: {
            parchment: Quill.import('parchment')
        },

        VideoResize: {
            parchment: Quill.import('parchment'),
            modules: ["Resize", "DisplaySize", "Toolbar"]
        },
        toolbar: {
            container: [
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                    { align: [] },
                ],
                ["image", "video"],
            ],
            handlers: {
                image: imageHandler,
            },
        },
    }), [imageHandler]);
    return (
        <div className="post-editer h-screen" style={{ height: "calc(100vh - 400px)" }}>
            <ReactQuill
                className="w-full h-full"
                ref={(element) => {
                    if (element !== null) {
                        ref.current = element;
                    }
                }}
                value={contents}
                onChange={setContents}
                modules={modules}
                theme="snow"
                placeholder="내용을 입력해주세요."
            />
        </div>
    )
});