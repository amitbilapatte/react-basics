import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";

function Product({ thumbnail, title, rating, price, _id, handleDelete }) {
  return (
    <Card sx={{ maxWidth: 345, m: "1rem", boxShadow: "10" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon onClick={() => handleDelete(_id)} />
          </IconButton>
        }
        title={title}
      />
      <CardMedia sx={{ borderRadius: "1rem" }} component="img" height="194" image={thumbnail} alt="image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
