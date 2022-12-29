import { BarBanner } from "components/banners/barBanner";
import { TopBanner } from "components/banners/topBanner";
import { FullWidthLayout } from "components/layouts/fullWidthLayout";
import { PostList } from "components/list/postList";
import { ProfileList } from "components/list/profileList";
import { memo } from "react";

const Main = () => {

    return (
        <div className="container">
            <TopBanner/>
            <FullWidthLayout title={"금주의 인기 프로필"}>
                <ProfileList />
            </FullWidthLayout>
            <BarBanner text={"Would you like to make a advance reservation? Click me !"}/>
            <FullWidthLayout title={"최고의 개발자 포트폴리오를 발견해보세요 !"}>
                <PostList />
            </FullWidthLayout>
            <FullWidthLayout title={"다른 개발자들의 프로젝트를 확인해보세요 !"}>
                <PostList />
            </FullWidthLayout>
            <FullWidthLayout title={"다양한 창작 영역의 인사이트를 한 곳에서 모아보세요."}>
                <PostList />
            </FullWidthLayout>
        </div>
    )
}

export default memo(Main);