import Profile from "../../components/profile";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";


export default function ProfileList() {
    return(
        <>
            <Header />
            <Profile />
            <PostList hasNavigation={false}/>
            <Footer />
        </>
    )
}