import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../Components";

const Videos = ({ videos,direction }: any) => {
  return (
    <Stack direction={direction||'row'} flexWrap="wrap" justifyContent={"start"} gap={2}>
      {videos?.map((item: { id: { videoId: any; channelId: any; }; }, index: React.Key | null | undefined) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
