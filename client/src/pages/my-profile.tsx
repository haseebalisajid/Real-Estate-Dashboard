import { useGetIdentity, useOne } from "@pankod/refine-core";
import { CircularProgress,Box,Typography } from "@pankod/refine-mui";

import { Profile } from "components";

const MyProfile = () => {
    const { data: user } = useGetIdentity();
    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: user?.userid,
    });

    const myProfile = data?.data ?? [];

    if (isLoading) return <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}><Typography><CircularProgress color="secondary" /></Typography></Box>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="My"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
        />
    );
};

export default MyProfile;