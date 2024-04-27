import Video from "~/components/Video/Video";

function Home() {
    return <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center'}}>
        <Video/>
        <Video/>
        <Video/>
    </div>;
}

export default Home;