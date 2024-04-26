import React, { useEffect, useState } from 'react'

import { Container, Typography, Card, Grid, CardMedia, CardContent, IconButton, Button, Box, TextField, Dialog, DialogContent, Stack, Autocomplete, Input } from '@mui/material'
import request from '../../utils/request'
import { useQuery } from '@tanstack/react-query'

const Overview = ({ onNext }) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [tags, setTags] = useState([])

    let categories = []
    let categoriesList = []
    let subCategories = []
    let subCategoriesList = []
    let attributes = []

    const { isPending, error, data } = useQuery({
      queryKey: ["categries"],
      queryFn: () => {
        return (request.get('/categories').then((res) => {
          return res.data
        }))
      }
    })

    if(data) {
      categories = data.categories
      categoriesList = categories.map((cat) => cat.name)
    }
    if(category) {
      const selectedCategory = categories.filter((cat) => cat.name === category)[0]
      subCategories = selectedCategory.subCategory
      subCategoriesList = subCategories.map((subCat) => subCat.name)
    }
    if(subCategory) {
      const selectedSubCategory = subCategories.filter((subCat) => subCat.name === subCategory)[0]
      attributes = selectedSubCategory.attributes
    }
    
    const returnData = (e) => {
      e.preventDefault()
      onNext({title, category, subCategory})
    }
  return (
    <Container>
      <Typography variant='h4'>Gig overview</Typography> <br/>
      <Stack>
        <Typography variant='h6' fontWeight={600}>Title</Typography>
        <Typography color='gray' variant='body2'>Tell the client what you will deliver and how it benefits them.</Typography> <br/>
        <TextField fullWidth size="small" name='title' sx={{marginBottom: "1.2rem"}} onChange={e => setTitle(e.target.value)} />
      </Stack>
      <br/>
      <Stack>
        <Typography variant='h6' fontWeight={600}>Category</Typography>
        <Typography color='gray' variant='body2'>Select a category so it's easy fro clients to find your project.</Typography> <br/>
        {isPending ? "loading" : error ? "Something went wrong" : <Autocomplete size='small' onChange={(e, cat) => setCategory(cat)} sx={{width: "12rem"}} options={categoriesList} renderInput={(params) => <TextField {...params} placeholder='Category'/>} />}
        <br/>
        {category && <Autocomplete size='small' onChange={(e, subCat) => setSubCategory(subCat)} sx={{width: "12rem"}} options={subCategoriesList} renderInput={(params) => <TextField {...params} placeholder='subcategory' />} />}
      </Stack>
      <br/>
      <Stack>
        <Typography variant='h6' fontWeight={600}>Gig attributes</Typography>
        <Typography color='gray' variant='body2'>Select a category above to see options.</Typography> <br/>
        <Grid columnSpacing={20} rowSpacing={2} container>
          {attributes && attributes.map((attribute) => (
            <Grid xl="6" item>
              <Stack justifyContent="space-between" direction="row">
                <Typography color='gray' variant='body2' fontWeight={500}>{attribute}</Typography>
                <Input sx={{width: "1rem"}} type='checkbox'></Input>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <br/>
      <Stack>
        <Typography variant='h6' fontWeight={600}>Search tags (optional)</Typography>
        <Typography color='gray' variant='body2'>Tell the client what you will deliver and how it benefits them.</Typography> <br/>
        <TextField variant='outlined' fullWidth size="small" name='tags' sx={{marginBottom: "1.2rem"}} />
      </Stack>
      <br/>
          
      <Button variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
    </Container>
  )
}

export default Overview