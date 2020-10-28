import React from 'react'
import { Button, Container, createStyles, Grid, IconButton, makeStyles, Paper, InputBase, Typography, withStyles } from '@material-ui/core'
import { 
	Twitter as TwitterIcon, 
	Search as SearchIcon, 
	NotificationsNoneOutlined as NotificationIcon, 
	EmailOutlined as EmailIcon,
	BookmarkBorderOutlined as BookmarkIcon,
	ListAltOutlined as ListIcon,
	PermIdentityOutlined as UserIcon
} from '@material-ui/icons'
import { Tweet } from '../components/Tweet'

const useHomeStyles = makeStyles( theme => ({
	container: {
		minHeight: '101.25vh'
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
				fontWeight: 700,
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
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
	},
}))

const SearchTextField = withStyles(() => createStyles({
	input: {
		height: 45,
		padding: '0 1.5rem',
		borderRadius: 30,
		backgroundColor: '#E6ECF0'
	}
}))(InputBase)

export const Home: React.FC = (): React.ReactElement => {
	const classes = useHomeStyles()

	return (
		<Container maxWidth="lg">
			<Grid className={classes.container} container spacing={4}>
				<Grid item xs={1} lg={3}>
					<ul className={classes.sideMenuList}>
						<IconButton color="primary">
							<TwitterIcon style={{ fontSize: 36 }} />
						</IconButton>
						<li>
							<SearchIcon />
							<Typography variant="h6">Поиск</Typography>
						</li>
						<li>
							<NotificationIcon />
							<Typography variant="h6">Уведомления</Typography>
						</li>
						<li>
							<EmailIcon />
							<Typography variant="h6">Сообщения</Typography>
						</li>
						<li>
							<BookmarkIcon />
							<Typography variant="h6">Закладки</Typography>
						</li>
						<li>
							<ListIcon />
							<Typography variant="h6">Список</Typography>
						</li>
						<li>
							<UserIcon />
							<Typography variant="h6">Профиль</Typography>
						</li>
						<li>
							<Button variant="contained" color="primary" style={{ padding: '1.75rem 0' }} fullWidth>Твитнуть</Button>
						</li>
					</ul>
				</Grid>
				<Grid className={classes.feed} item xs={7} lg={6}>
					<Paper variant="outlined" style={{ height: '100%' }} square>
						<Paper className={classes.block} square>
							<Typography variant="h6">Главная</Typography>
						</Paper>

						<Tweet 
							user={{ 
								name: 'Glafira Zhur', 
								login: 'glafirazhur', 
								avatar: 'https://i.playground.ru/p/lzF9n_oH7zjMPi6YYanG_A.jpeg' 
							}} 
							text="Это тестовый текст для твита" 
						/>
					</Paper>
				</Grid>
				<Grid item xs={4} lg={3}>
					<SearchTextField placeholder="Поиск в Твиттер" fullWidth />
				</Grid>
			</Grid>
		</Container>
	)
}
