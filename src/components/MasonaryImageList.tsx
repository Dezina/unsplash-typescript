import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItemPage from './ImageListItemPage';
import { ImageListItem } from '@mui/material';

 interface ImageListProps {
  details: Details[]
 }

 interface Details {
  id: number;
  name: string;
  image: string;
  price: number;
 }

export default function MasonryImageList({ details } :  ImageListProps ) {
 console.log("details", details)
  return (
    <>
    <div className="container-fluid mt-5">
    {
      details?.length === 0? null: (
        <Box sx={{ width: "100%", height: "100%", overflowY: 'scroll' }}>
     
          <ImageList variant="masonry" cols={3} gap={8}>
          {details?.map((item: any) => (
              <ImageListItem 
              key={item.id} 
              >
                <ImageListItemPage  
                key={item.id}
                id={item.id}
                name={item?.product_name}
                image={item?.product_image}
                price={item?.price}
                />
              </ImageListItem>
          ))}
  
          </ImageList>
     
   
     
        </Box>
      )
    }
    </div>
    </>
    
  );
}
