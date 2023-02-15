import { useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";
import { CircularProgress,Box,Typography } from "@pankod/refine-mui";

import { Profile } from "components";

const AgentProfile = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: id as string,
    });

    console.log(data);

    const myProfile = data?.data ?? [];

    if (isLoading) return <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}><Typography><CircularProgress color="secondary" /></Typography></Box>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="Agent"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
        />
    );
};

export default AgentProfile;