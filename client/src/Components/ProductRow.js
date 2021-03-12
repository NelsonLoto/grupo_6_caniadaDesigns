import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  content: {
    paddingRight: 30,
    paddingLeft: 30
  },
  img: {
    
  }
})

function ProductRow({productsJSON}) {
  const [productos, setProductos] = useState([])
  const classes = useStyles()

  useEffect(() => {
    fetchProductos()
  }, [])

  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products')
      setProductos(response.data.productos)
      return console.log(setProductos)
    } catch (error) {
      console.log(error)
    }
  }

  return (

      <div className={classes.content}>
    <div className={classes.root}>
      <Typography gutterBottom variant="h2" component="h1">
        Todos los Productos
      </Typography>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {productos.map((producto, i) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea className= "container">
                <CardMedia
                  component="img"
                  alt="Imagen Producto"
                  height={"auto"}
                  image={`http://localhost:3000${producto.image}`}
                  title="imagen de producto"
                  className={classes.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {producto.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {producto.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {producto.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Categoria: {producto.relations.categoria}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Color: {producto.relations.color}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Borrar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </div>

  )
}

export default ProductRow
