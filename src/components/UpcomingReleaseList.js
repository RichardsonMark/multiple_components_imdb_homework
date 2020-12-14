import UpcomingRelease from "./UpcomingRelease";

const UpcomingReleaseList = ({releases}) => {
    
    const upcomingreleaseNodes = releases.map((releases)=>{  
        return (
            <UpcomingRelease name={releases.name} url={releases.url} key={releases.id} />
        );
    });

    return (
        <>
        {upcomingreleaseNodes}
        </>
    )
}

export default UpcomingReleaseList;