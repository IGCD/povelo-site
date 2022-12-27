import { FullWidthLayout } from "components/layouts/fullWidthLayout";
import { PostList } from "components/list/postList";
import { memo } from "react";

const Main = () => {
    return (
        <div className="container">
            <FullWidthLayout title={"프로젝트"}>
                <PostList />
            </FullWidthLayout>
            <FullWidthLayout title={"게시글"}>
                <PostList />
            </FullWidthLayout>
            <FullWidthLayout title={"공고글"}>
                <PostList />
            </FullWidthLayout>
        </div>
    )
}

export default memo(Main);