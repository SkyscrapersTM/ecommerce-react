import { AddShoppingCart } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { formatMoney } from '../utilities/format-money.utility'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function Product () {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            // className={classes.action}
            variant='h5'
            color='textSeconday'
          >
            {formatMoney(50)}
          </Typography>
        }
        title='Shoes Punk'
        subheader='in stock'
      />
      <CardMedia
        component='img'
        height='194'
        image='https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png'
        alt='Converse Shoe'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Punk shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to Cart'>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(4)
          .fill()
          .map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography>
            Looks better punk with the new converse shoes. Nobody is punkier
            that converse.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
