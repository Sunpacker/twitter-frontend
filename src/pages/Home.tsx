import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import { Container, createStyles, Grid, IconButton, makeStyles, Paper, Typography, withStyles, Hidden, CircularProgress, List, ListItem, ListItemText, TextField, ListSubheader } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { 
	Twitter as TwitterIcon, 
	Search as SearchIcon, 
	NotificationsNoneOutlined as NotificationIcon, 
	EmailOutlined as EmailIcon,
	BookmarkBorderOutlined as BookmarkIcon,
	ListAltOutlined as ListIcon,
	PermIdentityOutlined as UserIcon
} from '@material-ui/icons'

import Tweet from '../components/Tweet'
import BackButton from '../components/BackButton'
import AddTweetForm from '../components/AddTweetForm'

import { ITweet } from '../store/ducks/tweets/state'
import { ITag } from '../store/ducks/tags/state'

import { fetchTweets } from '../store/ducks/tweets/actionCreators'
import { fetchTags } from '../store/ducks/tags/actionCreators'

import { selectIsTweetsLoading, selectTweets } from '../store/ducks/tweets/selectors'
import { selectIsTagsLoading, selectTags } from '../store/ducks/tags/selectors'


const useHomeStyles = makeStyles((theme: Theme) => ({
	container: {
		minHeight: '101.25vh'
	},
	sticky: {
		position: 'sticky',
		top: 0,
	},
	sideMenuList: {
		padding: 0,
		listStyleType: 'none',
		'& li': {
			display: 'flex',
			alignItems: 'center',
			padding: '.5rem',
			marginBottom: theme.spacing(1.5),
			borderRadius: 1000,
			'& svg': {
				fontSize: theme.spacing(4),
			},
			'& h6': {
				marginLeft: theme.spacing(1.5),
				fontSize: theme.spacing(2.75),
				fontWeight: 600,
			},
			'&:hover': {
				backgroundColor: 'rgba(29,161,242,.1)',
				cursor: 'pointer',
				'& svg path': {
					fill: theme.palette.primary.main
				},
				'& h6': {
					color: theme.palette.primary.main
				}
			},
		},
	},
	feed: {
		paddingBottom: '0!important'
	},
	block: {
		padding: '1rem 1.25rem',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
	},
	pageTitle: {
		display: 'flex',
		alignItems: 'center',
		zIndex: 1,
		'& h6': {
			marginLeft: theme.spacing(1)
		}
	},
	rightSide: {
		paddingTop: 20
	}
}))

const SearchTextField = withStyles((theme: Theme) => createStyles({
	root: {
		'& .MuiOutlinedInput-root': {
			borderRadius: 30,
			backgroundColor: '#E6ECF0',
			padding: 0,
			paddingLeft: 15,
			'&.Mui-focused': {
				backgroundColor: '#fff',
				'& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
				'& svg path': { fill: theme.palette.primary.main }
			}
		}
	}
}))(TextField)


const Home: React.FC = (): React.ReactElement => {
	const classes: any = useHomeStyles()
	const dispatch = useDispatch()

	const tweets = useSelector(selectTweets).items
	const isTweetsLoading = useSelector(selectIsTweetsLoading)
	
	const tags = useSelector(selectTags).items
	const isTagsLoading = useSelector(selectIsTagsLoading)

	let [hash, setHash] = React.useState<string | undefined>(undefined)
	const filterByHash = (value: string | undefined): void => setHash(value)

	React.useEffect(() => {
		const hashUrl: string = decodeURI(window.location.search.slice(3)) // hashtag without '?q='
		setHash(hashUrl)
	}, [])
	React.useEffect(() => {
		dispatch(fetchTweets())
		dispatch(fetchTags())
	}, [dispatch])

	return (
		<Container maxWidth="lg">
			<Grid className={classes.container} container spacing={4}>
				
				<Grid item xs={1} lg={3}>
					<ul className={`${classes.sticky} ${classes.sideMenuList}`}>
						<Link to="/">
							<IconButton color="primary">
								<TwitterIcon style={{ fontSize: 36 }} />
							</IconButton>
						</Link>
						<li>
							<SearchIcon />
							<Hidden smDown>
								<Typography variant="h6">Поиск</Typography>
							</Hidden>
						</li>
						<li>
							<NotificationIcon />
							<Hidden smDown>
								<Typography variant="h6">Уведомления</Typography>
							</Hidden>
						</li>
						<li>
							<EmailIcon />
							<Hidden smDown>
								<Typography variant="h6">Сообщения</Typography>
							</Hidden>
						</li>
						<li>
							<BookmarkIcon />
							<Hidden smDown>
								<Typography variant="h6">Закладки</Typography>
							</Hidden>
						</li>
						<li>
							<ListIcon />
							<Hidden smDown>
								<Typography variant="h6">Список</Typography>
							</Hidden>
						</li>
						<li>
							<UserIcon />
							<Hidden smDown>
								<Typography variant="h6">Профиль</Typography>
							</Hidden>
						</li>
					</ul>
				</Grid>

				<Grid className={classes.feed} item xs={7} lg={6}>
					<Paper variant="outlined" style={{ height: '100%' }} square>

						<Paper className={`${classes.sticky} ${classes.block} ${classes.pageTitle}`} square>
							<Route path="/" exact>
								<Typography variant="h6">Главная</Typography>
							</Route>
							<Route path="/search" exact>
								<Typography variant="h6">#{hash}</Typography>
							</Route>
							<Route path="/tweet/:any" exact>
								<BackButton />
								<Typography variant="h6">Твитнуть</Typography>
							</Route>
						</Paper>

						<Route className={classes.block} path={['/', '/search']} exact>
							<AddTweetForm className={classes.block} />
						</Route>
						
						<Route path="/" exact>
							{ isTweetsLoading ? <CircularProgress /> : (
								tweets.map((tweet: ITweet) => (
									<Tweet 
										_id={tweet._id} 
										key={tweet._id} 
										user={tweet.user} 
										text={tweet.text} 
										createdAt={tweet.createdAt} 
										updatedAt={tweet.updatedAt} 
									/>
								))
							)}
						</Route>
					</Paper>
				</Grid>

				<Grid item xs={4} lg={3}>
					<div className={`${classes.sticky} ${classes.rightSide}`}>
						<SearchTextField 
							variant="outlined" 
							placeholder="Поиск в Твиттер"
							fullWidth
						/>
						{ isTagsLoading ? <CircularProgress /> : (
							<List
								subheader={
									<ListSubheader component="div">
										Актуальные темы
									</ListSubheader>
								}
							>
								{ tags.map((tag: ITag) => (
									<Link key={tag._id} to={`/search?q=${tag.name}`} onClick={() => filterByHash(tag.name)}>
										<ListItem button divider>
											<ListItemText
												primary={`#${tag.name}`}
												secondary={
													<Typography component="span" variant="body2">Твитов: {tag.count}</Typography>
												}
											/>
										</ListItem>
									</Link>
								))}
							</List>
						)}
					</div>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Home
