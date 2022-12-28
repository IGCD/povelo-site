import axios from "axios";
import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { isEmpty } from "utils/isEmpty";

export const PostEditer = () => {
    const [contents, setContents] = useState("");
    const quillRef = useRef();

    const imageHandler = () => {
        const input = document.createElement("input");
        const formData = new FormData();
        let url = "";

        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files;
            if (file !== null) {
                formData.append("image", file[0]);

                try {
                    const res = axios.get();

                    url = res.data.url;

                    const range = quillRef.current?.getEditor().getSelection()?.index;
                    if (!isEmpty(range)) {
                        let quill = quillRef.current?.getEditor();
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
    };
    const modules = useMemo(
        () => ({
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
        }),
        []
    );
    return (
        <div className="post-editer h-screen" style={{height:"calc(100vh - 400px)"}}>
            <ReactQuill
                className="w-full h-full"
                ref={(element) => {
                    if (element !== null) {
                        quillRef.current = element;
                    }
                }}
                value={contents}
                onChange={setContents}
                modules={modules}
                //theme="snow"
                placeholder="내용을 입력해주세요."
            />
        </div>
    )
}