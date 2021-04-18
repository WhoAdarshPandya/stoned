import React, { useState } from 'react'

import {
  Button,
  IconButton,
  Avatar,
  Alert,
  TextField,
  Image,
  Typography,
  Badge,
  Slider,
  Rating,
  Toast,
  Dialog,
  Appbar,
  Grid,
  GridRow,
  GridColumn,
  Card,
  CardContent,
  CardActions,
  List,
  CardMedia,
  ListItem,
  Divider
} from 'stoned'

const App = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [branch, setBranch] = useState('')
  const [txt4, setTxt4] = useState('this')
  const [txt5, setTxt5] = useState('is')
  const [txt6, setTxt6] = useState('error')
  const [sliVal, setSliVal] = useState(0)
  const [sliVal2, setSliVal2] = useState(0)
  const [showToast, setShowToast] = useState(false)
  const [showToast1, setShowToast1] = useState(false)
  const [showToast2, setShowToast2] = useState(false)
  const [showToast3, setShowToast3] = useState(false)
  const [showToast4, setShowToast4] = useState(false)
  const [showToast5, setShowToast5] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [data] = useState([
    {
      profle_url:
        'https://filmspell.com/wp-content/uploads/2019/03/Manoj-Bajpayee-Sardar-Khan-Gangs-of-Wasseypur-I-2012-420x280.jpg',
      name: 'Sardar Khan',
      dialogue: 'hazrat hazrat hazrat'
    },
    {
      profle_url:
        'https://www.india.com/wp-content/uploads/2014/01/ramadhir-singh.jpg',
      name: 'Ramadhir Singh',
      dialogue: 'saale sanp ko paal rahe the'
    },
    {
      profle_url:
        'https://images.firstpost.com/wp-content/uploads/2020/06/jaideep-ahlawat-640.jpg?impolicy=website&width=1200&height=800',
      name: 'Shahid Khan',
      dialogue: 'harami man sala mane kaise'
    }
  ])
  return (
    <>
      <Button
        color='primary'
        onClick={(e: any) => {
          console.log(e)
        }}
      >
        primary
      </Button>
      <Button
        color='secondary'
        onClick={(e: any) => {
          console.log(e)
        }}
      >
        secondary
      </Button>
      <Button
        color='inherit'
        textColor='textColorPrimary'
        // disableRipple={true}
        onClick={(e: any) => {
          console.log(e)
        }}
      >
        transparent
      </Button>
      <Button
        color='inherit'
        textColor='textColorPrimary'
        disableRipple={true}
        onClick={(e: any) => {
          console.log(e)
        }}
      >
        no ripple
      </Button>
      <br />
      <Button
        onClick={(e) => {
          console.log(e)
        }}
        raised={true}
      >
        primary raised
      </Button>
      <Button
        raised={true}
        color='secondary'
        onClick={(e) => {
          console.log(e)
        }}
      >
        secondary raised
      </Button>
      <Button
        raised={true}
        color='inherit'
        textColor='textColorSecondary'
        onClick={(e) => {
          console.log(e)
        }}
      >
        transparent
      </Button>
      <Button
        raised={true}
        color='inherit'
        textColor='textColorSecondary'
        disableRipple={true}
        onClick={(e) => {
          console.log(e)
        }}
      >
        no ripple raised
      </Button>
      <br />
      <Button
        color='primary'
        onClick={(e) => {
          console.log(e)
        }}
        size='small'
      >
        small
      </Button>
      <Button
        color='primary'
        onClick={(e) => {
          console.log(e)
        }}
        size='medium'
      >
        medium
      </Button>
      <Button
        color='primary'
        onClick={(e) => {
          console.log(e)
        }}
        size='large'
      >
        large
      </Button>
      <Button
        color='primary'
        href='https://google.com'
        onClick={(e) => {
          console.log(e)
        }}
        size='large'
      >
        Link
      </Button>
      <br />
      <Button variant='outlined'>primary outlined</Button>
      <Button variant='outlined' raised={true}>
        primary outlined raised
      </Button>
      <Button color='secondary' variant='outlined'>
        secondary outlined
      </Button>
      <Button
        onClick={() => console.log('sd')}
        color='secondary'
        variant='outlined'
        raised={true}
      >
        secondary outlined raised
      </Button>
      <br />
      <IconButton size='small'>photo</IconButton>
      <IconButton color='primary'>delete</IconButton>
      <IconButton color='secondary' size='large'>
        new_releases
      </IconButton>
      <br />
      <IconButton onClick={(e) => console.log(e)}>library_add</IconButton>
      <IconButton color='primary'>lightbulb_outline</IconButton>
      <IconButton color='primary'>local_activity</IconButton>
      <IconButton color='primary'>home</IconButton>
      <IconButton color='primary'>chat</IconButton>
      <IconButton color='primary'>search</IconButton>
      <IconButton color='primary'>account_circle</IconButton>
      <IconButton color='primary'>send</IconButton>
      <IconButton color=''>thumb_up</IconButton>
      <IconButton color='' onClick={(e) => console.log(e)}>
        thumb_down
      </IconButton>
      <br />
      <Button
        color='primary'
        size='small'
        onClick={(e) => {
          console.log(e)
        }}
        startIcon='save'
      >
        save
      </Button>
      <Button
        color='primary'
        onClick={(e) => {
          console.log(e)
        }}
        startIcon='save'
      >
        save
      </Button>
      <Button
        color='primary'
        startIcon='save'
        size='large'
        onClick={(e) => {
          console.log(e)
        }}
      >
        save
      </Button>
      <Button
        color='inherit'
        textColor='textColorPrimary'
        startIcon='cloud_upload'
        onClick={(e) => {
          console.log(e)
        }}
      >
        upload
      </Button>
      <br />
      <Button
        color='secondary'
        onClick={(e) => {
          console.log(e)
        }}
        endIcon='delete'
      >
        delete
      </Button>
      <Button
        color='secondary'
        onClick={(e) => {
          console.log(e)
        }}
        endIcon='send'
      >
        send
      </Button>
      <Button
        color='secondary'
        onClick={(e) => {
          console.log(e)
        }}
        endIcon='add'
      >
        add
      </Button>
      <Button
        color='secondary'
        variant='outlined'
        endIcon='cloud_upload'
        onClick={(e) => {
          console.log(e)
        }}
      >
        upload
      </Button>
      <br />
      <Button color='primary' startIcon='save' endIcon='save'>
        upload
      </Button>
      <hr />
      <Avatar
        src='https://images.unsplash.com/photo-1612869839957-b596b87356ae?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1613425269135-fb9f19ae7be8?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1585477280412-633abe639bd4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1bnNldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <Avatar
        src='https://images.unsplash.com/photo-1498575637358-821023f27355?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHN1bnNldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={(e: any) => console.log(e)}
      />
      <br />
      <br />
      <Avatar src='https://randomuser.me/api/portraits/women/75.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/women/44.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/women/31.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/women/40.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/women/28.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/women/42.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/men/71.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/men/61.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/women/26.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/men/10.jpg' />
      <Avatar src='https://randomuser.me/api/portraits/women/27.jpg' />
      <br />
      <br />
      <Avatar
        src='https://freaky5.com/wp-content/uploads/2018/07/SARDAR_KHAN-1024x682.jpg'
        size='small'
        alt='sd'
      />
      <Avatar
        src='https://freaky5.com/wp-content/uploads/2018/07/SARDAR_KHAN-1024x682.jpg'
        size='medium'
        alt='sd'
      />
      <Avatar
        src='https://freaky5.com/wp-content/uploads/2018/07/SARDAR_KHAN-1024x682.jpg'
        size='large'
        alt='sd'
      />
      <br />
      <Avatar size='small' alt='sd'>
        Adarsh
      </Avatar>
      <Avatar size='medium' alt='sd'>
        o
      </Avatar>
      <Avatar size='large' alt='sd'>
        n
      </Avatar>
      <br />
      <Avatar size='small' />
      <Avatar size='medium' />
      <Avatar size='large' />
      <p>avatar group remaining</p>
      <p>alerts</p>
      <Alert severity='error' />
      <br />
      <Alert severity='warning' />
      <br />
      <Alert severity='info' />
      <br />
      <Alert severity='success' />
      <hr />
      <TextField
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        onClick={(e: any) => console.log(e)}
        type='text'
        label='Standard'
      />
      <TextField
        value={surname}
        onChange={(e: any) => setSurname(e.target.value)}
        onClick={(e: any) => console.log(e)}
        type='text'
        variant='filled'
        label='Filled'
      />
      <TextField
        value={branch}
        onChange={(e: any) => setBranch(e.target.value)}
        onClick={(e: any) => console.log(e)}
        type='text'
        variant='outlined'
        label='Outlined'
      />
      ---errors---
      <TextField
        value={txt4}
        onChange={(e: any) => setTxt4(e.target.value)}
        onClick={(e: any) => console.log(e)}
        type='text'
        label='Error Standard'
        helperText='this is helper'
        error={true}
        // autoFocus={true}
      />
      <TextField
        value={txt5}
        variant='filled'
        onChange={(e: any) => setTxt5(e.target.value)}
        onClick={(e: any) => console.log(e)}
        type='text'
        label='Error Filled'
        helperText='this is helper 2'
        error={true}
        // autoFocus={true}
      />
      <TextField
        value={txt6}
        variant='outlined'
        onChange={(e: any) => setTxt6(e.target.value)}
        onClick={(e: any) => console.log(e)}
        type='text'
        label='Error Outlined'
        helperText='this is helper 3'
        error={true}
        // autoFocus={true}
      />
      <hr />
      <p>images</p>
      <Image
        alt='img'
        onClick={(e: any) => console.log(e)}
        src='https://images.unsplash.com/photo-1617015606776-c54fd56b69b8?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      />
      <br />
      <Image
        alt='img'
        rounded
        onClick={(e: any) => console.log(e)}
        src='https://www.wonderplugin.com/wp-content/uploads/2016/06/blue-grape-hyacinths.jpg'
      />
      <hr />
      <p>typography</p>
      <Typography variant='h1' color='primary'>
        h1. heading
      </Typography>
      <Typography variant='h2'>h2. heading</Typography>
      <Typography variant='h3'>h3. heading</Typography>
      <Typography variant='h4'>h4. heading</Typography>
      <Typography variant='h5'>h5. heading</Typography>
      <Typography variant='h6'>h6. heading</Typography>
      <Typography variant='subtitle1' muted>
        subtitle1
      </Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>
      <Typography variant='body1' align='center' muted>
        this is centered text
      </Typography>
      <Typography muted variant='body2' onClick={(e: any) => console.log(e)}>
        this is body2
      </Typography>
      <hr />
      <p>badges</p>
      <p>badge with avatars</p>
      <Badge onClick={(e) => console.log(e)}>
        <Avatar
          size='small'
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          // onClick={(e) => console.log(e)}
        />
      </Badge>
      <Badge>
        <Avatar
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          onClick={(e) => console.log(e)}
        />
      </Badge>
      <Badge color='secondary'>
        <Avatar
          size='large'
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          onClick={(e) => console.log(e)}
        />
      </Badge>
      <Badge status_badge>
        <Avatar
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          onClick={(e) => console.log(e)}
        />
      </Badge>
      <Badge status_badge anchor='bottom-left'>
        <Avatar
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          onClick={(e) => console.log(e)}
        />
      </Badge>
      <Badge status_badge anchor='top-left'>
        <Avatar
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          onClick={(e) => console.log(e)}
        />
      </Badge>
      <Badge status_badge anchor='bottom-right'>
        <Avatar
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          onClick={(e) => console.log(e)}
        />
      </Badge>
      <Badge color='secondary'>
        <IconButton>email</IconButton>
      </Badge>
      <Badge color='primary' anchor='top-right' onClick={(e) => console.log(e)}>
        <IconButton>email</IconButton>
      </Badge>
      <p>badge with counter</p>
      <Badge color='secondary' variant='counter' count={0}>
        <IconButton>email</IconButton>
      </Badge>
      <Badge color='primary' anchor='top-right' variant='counter' count={0}>
        <IconButton>email</IconButton>
      </Badge>
      <Badge color='primary' anchor='top-right' variant='counter' count={7}>
        <IconButton>delete</IconButton>
      </Badge>
      <Badge color='primary' anchor='top-right' variant='counter' count={7}>
        <Avatar
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          onClick={(e) => console.log(e)}
        />
      </Badge>
      <Badge color='primary' anchor='top-left' variant='counter' count={7}>
        <Avatar
          src='https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg'
          onClick={(e) => console.log(e)}
        />
      </Badge>
      <hr />
      <p>slider</p>
      <Slider initial={0} max={100} onChange={(value) => setSliVal(value)} />
      <span>{parseInt(`${sliVal}`)}</span>
      <p>secondary</p>
      <Slider
        initial={0}
        max={100}
        color='secondary'
        onChange={(value) => setSliVal2(value)}
        onClick={(e) => console.log(e)}
      />
      <span>{parseInt(`${sliVal2}`)}</span>
      <hr />
      <Rating onChange={(e) => console.log(e)} />
      <Rating onChange={(e) => console.log(e)} color='secondary' />
      <hr />
      <Button
        onClick={() => {
          setShowToast((prev) => !prev)
        }}
      >
        show normal toast
      </Button>
      <Button
        onClick={() => {
          setShowToast1((prev) => !prev)
        }}
      >
        show success toast
      </Button>
      <Button
        onClick={() => {
          setShowToast2((prev) => !prev)
        }}
      >
        show error toast
      </Button>
      <Button
        onClick={() => {
          setShowToast3((prev) => !prev)
        }}
      >
        show info toast
      </Button>
      <Button
        onClick={() => {
          setShowToast4((prev) => !prev)
        }}
      >
        show warning toast
      </Button>
      <Button
        onClick={() => {
          setShowToast5((prev) => !prev)
        }}
      >
        show toast with button
      </Button>
      {showToast && (
        <Toast
          onClick={(e: any) => {
            console.log(e)
          }}
          onFinish={() => {
            setShowToast(false)
          }}
          renderCloseButton={true}
          onCloseClick={() => {
            setShowToast(false)
          }}
          autoHideDuration={5}
          renderActionButton={false}
          actionButtonName='close'
          onButtonClick={() => {
            setShowToast(false)
          }}
          message='the standard toast'
          variant='standard'
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        />
      )}
      {showToast1 && (
        <Toast
          onClick={(e: any) => {
            console.log(e)
          }}
          onFinish={() => {
            setShowToast1(false)
          }}
          renderCloseButton={true}
          onCloseClick={() => {
            setShowToast1(false)
          }}
          autoHideDuration={5}
          renderActionButton={false}
          actionButtonName='close'
          onButtonClick={() => {
            setShowToast1(false)
          }}
          message='the success toast'
          variant='success'
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      )}
      {showToast2 && (
        <Toast
          onClick={(e: any) => {
            console.log(e)
          }}
          onFinish={() => {
            setShowToast2(false)
          }}
          renderCloseButton={true}
          onCloseClick={() => {
            setShowToast2(false)
          }}
          autoHideDuration={5}
          renderActionButton={false}
          actionButtonName='close'
          onButtonClick={() => {
            setShowToast2(false)
          }}
          message='the error toast'
          variant='error'
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
      )}
      {showToast3 && (
        <Toast
          onClick={(e: any) => {
            console.log(e)
          }}
          onFinish={() => {
            setShowToast3(false)
          }}
          renderCloseButton={true}
          onCloseClick={() => {
            setShowToast3(false)
          }}
          autoHideDuration={5}
          renderActionButton={false}
          actionButtonName='close'
          onButtonClick={() => {
            setShowToast3(false)
          }}
          message='the info toast'
          variant='info'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      )}
      {showToast4 && (
        <Toast
          onClick={(e: any) => {
            console.log(e)
          }}
          onFinish={() => {
            setShowToast4(false)
          }}
          renderCloseButton={true}
          onCloseClick={() => {
            setShowToast4(false)
          }}
          autoHideDuration={5}
          renderActionButton={false}
          actionButtonName='close'
          onButtonClick={() => {
            setShowToast4(false)
          }}
          message='the warning toast'
          variant='warning'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        />
      )}
      {showToast5 && (
        <Toast
          onClick={(e: any) => {
            console.log(e)
          }}
          onFinish={() => {
            setShowToast5(false)
          }}
          renderCloseButton={false}
          onCloseClick={() => {
            setShowToast5(false)
          }}
          autoHideDuration={5}
          renderActionButton={true}
          actionButtonName='close'
          onButtonClick={() => {
            setShowToast5(false)
          }}
          message='toast with button'
          variant='standard'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        />
      )}
      <hr />
      <Button
        onClick={() => {
          setShowDialog(true)
        }}
      >
        open modal
      </Button>
      {showDialog && (
        <Dialog
          // onClick={() => {
          //   alert('on it')
          // }}
          onBackdropClick={() => {
            setShowDialog(false)
          }}
          setAutoHide={false}
          // cancellable={false}
          positiveButtonText='okay'
          negativeButtonText='cancel'
          buttonKind='textColorPrimary'
          onPositiveButtonClick={() => {
            setShowDialog(false)
          }}
          onNegativeButtonClick={() => {
            alert('cancel pressed')
          }}
        />
      )}
      <hr />
      <div className='appbar-container'>
        <Appbar
          startIcon='menu'
          renderStartIcon={true}
          onStartIconClick={(e) => console.log(e)}
          onClick={(e) => console.log(e)}
          renderActionButton={true}
          onActionButtonClick={() => console.log('hi')}
          actionButtonName='logout'
        />
        <br />
        <Appbar
          startIcon='menu'
          renderStartIcon={true}
          onStartIconClick={(e) => console.log(e)}
          onClick={(e) => console.log(e)}
          // renderActionButton={true}
          // onActionButtonClick={() => console.log('hi')}
          // actionButtonName='logout'
          renderIconButton={true}
          iconButtons={[
            { name: 'email', hasBadge: true, count: 4 },
            { name: 'notifications', count: 9, hasBadge: true },
            { name: 'account_circle', hasBadge: false }
          ]}
          onIconButtonClick={(e, name) => console.log(e, name)}
        />
        <br />

        <Appbar
          startIcon='menu'
          variant='secondary'
          renderStartIcon={true}
          onStartIconClick={(e) => console.log(e)}
          onClick={(e) => console.log(e)}
          renderActionButton={true}
          onActionButtonClick={() => console.log('hi')}
          actionButtonName='logout'
        />
        <br />
        <Appbar
          startIcon='menu'
          variant='secondary'
          renderStartIcon={true}
          onStartIconClick={(e) => console.log(e)}
          onClick={(e) => console.log(e)}
          // renderActionButton={true}
          // onActionButtonClick={() => console.log('hi')}
          // actionButtonName='logout'
          renderIconButton={true}
          iconButtons={[
            { name: 'email', hasBadge: true, count: 4 },
            { name: 'notifications', count: 9, hasBadge: true },
            { name: 'account_circle', hasBadge: false }
          ]}
          onIconButtonClick={(e, name) => console.log(e, name)}
        />
        <br />
        <Appbar
          variant='dark'
          startIcon='menu'
          renderStartIcon={true}
          onStartIconClick={(e) => console.log(e)}
          onClick={(e) => console.log(e)}
          renderActionButton={true}
          onActionButtonClick={() => console.log('hi')}
          actionButtonName='logout'
        />
        <br />
        <Appbar
          variant='dark'
          startIcon='menu'
          renderStartIcon={true}
          onStartIconClick={(e) => console.log(e)}
          onClick={(e) => console.log(e)}
          // renderActionButton={true}
          // onActionButtonClick={() => console.log('hi')}
          // actionButtonName='logout'
          renderIconButton={true}
          iconButtons={[
            { name: 'email', hasBadge: true, count: 4 },
            { name: 'notifications', count: 9, hasBadge: true },
            { name: 'account_circle', hasBadge: false }
          ]}
          onIconButtonClick={(e, name) => console.log(e, name)}
        />
        <br />
      </div>
      <hr />
      <div className='grid-container'>
        <br />
        <Grid>
          <>
            <GridRow justifyContent='space-between' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      single col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='space-between' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      two col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      two col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='space-between' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      three col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      three col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      three col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='space-between' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      four col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      four col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      four col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      four col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      five col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      five col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      five col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      five col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      five col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      six col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      six col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      six col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      six col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      six col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      six col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      seven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      seven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      seven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      seven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      seven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      seven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      seven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eight col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eight col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eight col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eight col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eight col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eight col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eight col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eight col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      nine col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      ten col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      eleven col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
                <GridColumn gutter>
                  <div className='check'>
                    {' '}
                    <Typography variant='h6' muted>
                      twelve col
                    </Typography>{' '}
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn
                  gutter
                  flex={8}
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      eight
                    </Typography>
                  </div>
                </GridColumn>
                <GridColumn
                  flex={4}
                  gutter
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      four
                    </Typography>
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn
                  gutter
                  flex={4}
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      four
                    </Typography>
                  </div>
                </GridColumn>
                <GridColumn
                  flex={8}
                  gutter
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      eight
                    </Typography>
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn
                  gutter
                  flex={3}
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      three
                    </Typography>
                  </div>
                </GridColumn>
                <GridColumn
                  flex={9}
                  gutter
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      nine
                    </Typography>
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn
                  gutter
                  flex={9}
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      nine
                    </Typography>
                  </div>
                </GridColumn>
                <GridColumn
                  flex={3}
                  gutter
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      three
                    </Typography>
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn
                  gutter
                  flex={7}
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      seven
                    </Typography>
                  </div>
                </GridColumn>
                <GridColumn
                  flex={5}
                  gutter
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      five
                    </Typography>
                  </div>
                </GridColumn>
              </>
            </GridRow>
            <br />
            <GridRow justifyContent='center' alignItems='center'>
              <>
                <GridColumn
                  gutter
                  flex={5}
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      five
                    </Typography>
                  </div>
                </GridColumn>
                <GridColumn
                  flex={7}
                  gutter
                  alignItems='center'
                  justifyContent='center'
                >
                  <div className='check'>
                    <Typography variant='h6' muted>
                      seven
                    </Typography>
                  </div>
                </GridColumn>
              </>
            </GridRow>
          </>
        </Grid>
      </div>
      <hr />
      <div className='card-holder'>
        <p>card idhar ayenge</p>
        <Card>
          <>
            <CardContent>
              <>
                <Typography variant='body1' muted gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant='h5'>be•nev•o•lent</Typography>
                <Typography variant='body1' muted gutterBottom>
                  adjective
                </Typography>
                <Typography variant='body2' gutterBottom>
                  <>
                    well meaning and kindly. <br />
                    "a benevolent smile"
                  </>
                </Typography>
              </>
            </CardContent>
            <CardActions>
              <div className=''>
                <br />
                <Button color='inherit' textColor='textColorPrimary'>
                  LEARN MORE
                </Button>
              </div>
            </CardActions>
          </>
        </Card>
        <br />
        <Card
          variant='overlay'
          src={`https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80`}
        >
          <>
            <CardContent>
              <>
                <Typography variant='body1' color='white' gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant='h5' color='white'>
                  be•nev•o•lent
                </Typography>
                <Typography variant='body1' color='white' muted gutterBottom>
                  adjective
                </Typography>
                <Typography variant='body2' gutterBottom color='white'>
                  <>
                    well meaning and kindly. <br />
                    "a benevolent smile"
                  </>
                </Typography>
              </>
            </CardContent>
            <CardActions>
              <div className=''>
                <br />
                <Button color='inherit' textColor='textColorWhite'>
                  LEARN MORE
                </Button>
              </div>
            </CardActions>
          </>
        </Card>
        <br />
        <Card
          variant='overlay'
          src='https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
        >
          <>
            <CardContent>
              <>
                <Typography variant='body1' color='white' gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant='h5' color='white'>
                  be•nev•o•lent
                </Typography>
                <Typography variant='body1' color='white' muted gutterBottom>
                  adjective
                </Typography>
                <Typography variant='body2' gutterBottom color='white'>
                  <>
                    well meaning and kindly. <br />
                    "a benevolent smile"
                  </>
                </Typography>
              </>
            </CardContent>
            <CardActions>
              <div className=''>
                <br />
                <Button color='inherit' textColor='textColorWhite'>
                  LEARN MORE
                </Button>
              </div>
            </CardActions>
          </>
        </Card>
        <br />
        <Card
          renderBadge={true}
          cardBadge='In Progress...'
          elevation={7}
          variant='overlay'
          src='https://images.unsplash.com/photo-1519575396444-2e78bc5f4afc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
        >
          <>
            <CardContent>
              <>
                <Typography variant='body1' color='white' gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant='h5' color='white'>
                  be•nev•o•lent
                </Typography>
                <Typography variant='body1' color='white' muted gutterBottom>
                  adjective
                </Typography>
                <Typography variant='body2' gutterBottom color='white'>
                  <>
                    well meaning and kindly. <br />
                    "a benevolent smile"
                  </>
                </Typography>
              </>
            </CardContent>
            <CardActions>
              <div className=''>
                <br />
                <Button color='inherit' textColor='textColorWhite'>
                  LEARN MORE
                </Button>
              </div>
            </CardActions>
          </>
        </Card>
        <br />
        <Card containsMedia={true}>
          <>
            <CardMedia src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg' />
            <CardContent explicitPadding>
              <>
                {/* <br /> */}
                <Typography variant='h5' gutterBottom>
                  Lizard
                </Typography>
                <br />
                <Typography variant='body2' muted>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </>
            </CardContent>
            <CardActions explicitPadding>
              <div className=''>
                <Button color='inherit' textColor='textColorPrimary'>
                  share
                </Button>
                <Button color='inherit' textColor='textColorPrimary'>
                  LEARN MORE
                </Button>
              </div>
            </CardActions>
          </>
        </Card>
        <br />
        <Card containsMedia={true}>
          <>
            <CardContent explicitPadding paddingVertical='10px !important'>
              <div className='card-menu'>
                <Avatar size='small'>A</Avatar>
                <div className='card-text'>
                  <Typography variant='body2'>Adarsh Pandya</Typography>
                  <Typography variant='body2' muted>
                    September 14, 2016
                  </Typography>
                </div>
                <div className='card-inner-menu'>
                  <IconButton size='small'>more_vert</IconButton>
                </div>
              </div>
            </CardContent>
            <CardMedia src='https://www.businessmodulehub.com/wp-content/uploads/2019/08/sacred-games-season-2-poster.jpg.webp' />
            <CardContent explicitPadding>
              <Typography variant='body2' muted gutterBottom>
                This episode titled foreshadowed another one of Guruji’s
                sermons. In his lecture, he tells the story of the Hindu
                mythology demon, Apasmara, the God of Ego and arrogance. His
                weakness, although, was his need for attention.
              </Typography>
            </CardContent>
            <CardActions explicitPadding>
              <div className='card-icons-bottom'>
                <div>
                  <IconButton size='small'>favorite</IconButton>
                  <IconButton size='small'>share</IconButton>
                </div>
                <div>
                  <IconButton size='small'>thumb_up</IconButton>
                </div>
              </div>
            </CardActions>
          </>
        </Card>
        <br />
        <div className='music-parent'>
          <Card containsMedia={true} variant='horizontal'>
            <>
              <div className='music-card'>
                <CardContent explicitPadding>
                  <>
                    <div className='music-inner1'>
                      <Typography variant='h5'>
                        Jiya Ho Bihar Ke Lala
                      </Typography>
                      <Typography variant='subtitle1' muted>
                        Manoj Tiwari
                      </Typography>
                    </div>
                    <br />
                    <div className='music-inner2'>
                      <IconButton>skip_previous</IconButton>
                      <IconButton size='large'>play_arrow</IconButton>
                      <IconButton>skip_next</IconButton>
                    </div>
                  </>
                </CardContent>
                <CardMedia src='https://www.winwallpapers.net/w1/2014/12/Gangs-of-Wasseypur-2012-Wallpapers.jpg' />
              </div>
            </>
          </Card>
        </div>
      </div>
      <hr />
      <div className='list-holder'>
        <List elevation={6}>
          <>
            <Typography variant='body1' muted>
              GOW Fans
            </Typography>
            {data.map(({ dialogue, name, profle_url }) => (
              <ListItem key={name}>
                <>
                  <div className='user-datta'>
                    <Avatar size='small' src={profle_url} />
                    <div className='user-detail'>
                      <Typography variant='body1'>{name}</Typography>
                      <Typography variant='body2' muted>
                        {dialogue}
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <IconButton size='small'>delete</IconButton>
                  </div>
                </>
              </ListItem>
            ))}
          </>
        </List>
        <br />
        <List elevation={6}>
          <>
            <Typography variant='body1' muted>
              GOW Fans
            </Typography>
            {data.map(({ dialogue, name, profle_url }) => (
              <React.Fragment key={name}>
                <ListItem key={name}>
                  <>
                    <div className='user-datta'>
                      <Avatar size='small' src={profle_url} />
                      <div className='user-detail'>
                        <Typography variant='body1'>{name}</Typography>
                        <Typography variant='body2' muted>
                          {dialogue}
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <IconButton size='small'>share</IconButton>
                    </div>
                  </>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </>
        </List>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
    </>
  )
}

export default App
