import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, CircularProgress, IconButton, makeStyles, Paper, TextareaAutosize, Theme, Snackbar, Slide, SlideProps } from '@material-ui/core'
import {
	ImageOutlined as ImageOutlinedIcon,
	EmojiEmotionsOutlined as EmojiIcon,
	Close as CloseIcon
} from '@material-ui/icons'
import { addTweet } from '../store/ducks/tweets/actionCreators'
import { selectAddFormStatus } from '../store/ducks/tweets/selectors'
import { FormStatus } from '../store/ducks/tweets/state'

const useTweetFormStyles = makeStyles((theme: Theme) => ({
	tweetForm: {
		display: 'flex',
		flexDirection: 'column',
		'& textarea': {
			marginLeft: theme.spacing(1.5),
			width: '100%',
			height: '100%',
			fontSize: 24,
			fontFamily: 'Segoe UI',
			border: 'none',
			resize: 'none',
			'&:focus': {
				outline: 'none'
			}
		}
	},
	tweetFormText: {
		display: 'flex',
		marginBottom: theme.spacing(1.5)
	},
	tweetFormActions: {
		display: 'flex',
		alignItems: 'center'
	},
	tweetFormTextProgressBar: {
		marginLeft: theme.spacing(.5),
		marginRight: theme.spacing(2)
	},
}))

interface IAddTweetForm {
	className?: string;
}

const AddTweetForm: React.FC<IAddTweetForm> = ({ className }: IAddTweetForm): React.ReactElement => {
	const classes: any = useTweetFormStyles()
	const dispatch = useDispatch()
	const formStatus = useSelector(selectAddFormStatus)

	const [text, setText] = React.useState<string>('')
	const textLength: number = text.length
	const textLimit: number = 280
	const textLimitPercentage: number = Math.round((text.length / textLimit) * 100)

	const [visibleNotification, setVisibleNotification] = React.useState<boolean>(false)
	const handleCloseNotification = () => setVisibleNotification(false)

	type TransitionProps = Omit<SlideProps, 'direction'>
	const TransitionRight = (props: TransitionProps) => <Slide {...props} direction="left" />
	
	const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>): void => e.currentTarget ? setText(e.currentTarget.value) : undefined
	const handleAddTweet = (): void => {
		dispatch(addTweet(text))
		setText('')
	}

	React.useEffect(() => {
		if(formStatus === FormStatus.ERROR) setVisibleNotification(true)
	}, [formStatus])

	return (
		<Paper className={`${className} ${classes.tweetForm}`}>
			<div className={classes.tweetFormText}>
				<Avatar src="https://i.playground.ru/p/lzF9n_oH7zjMPi6YYanG_A.jpeg" />
				<TextareaAutosize placeholder="Что происходит?" value={text} onChange={handleChangeText} />
			</div>

			<div className={classes.tweetFormActions}>
				<IconButton color="primary">
					<ImageOutlinedIcon />
				</IconButton>
				<IconButton color="primary" style={{ marginRight: 'auto' }}>
					<EmojiIcon />
				</IconButton>

				{text && (
					<>
						<span>{`${textLength} / ${textLimit}`}</span>
						<CircularProgress 
							className={classes.tweetFormTextProgressBar} 
							variant="static" 
							size={20} thickness={5} 
							value={textLength >= textLimit ? 100 : textLimitPercentage}
							style={ textLength >= textLimit ? { color: 'red' } : undefined }
						/>
					</>
				)}

				<Button 
					onClick={handleAddTweet} 
					disabled={!text || textLength >= textLimit} 
					color="primary" 
					variant="contained"
				>
					{formStatus === FormStatus.LOADING ? <CircularProgress color="inherit" size={20} /> : 'Твитнуть'}
				</Button>
			</div>

			<Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={visibleNotification}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
				message="Ошибка при добавлении твита"
				TransitionComponent={TransitionRight}
        action={
          <>
            <Button color="secondary" size="small" onClick={handleCloseNotification}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseNotification}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
		</Paper>
	)
}

export default AddTweetForm
