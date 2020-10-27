import React from 'react'
import { Grid, IconButton, Paper, Typography } from '@material-ui/core'
import { 
	Twitter as TwitterIcon, 
	Search as SearchIcon, 
	NotificationsNoneOutlined as NotificationIcon, 
	EmailOutlined as EmailIcon,
	BookmarkBorderOutlined as BookmarkIcon,
	ListAltOutlined as ListIcon,
	PermIdentityOutlined as UserIcon
} from '@material-ui/icons'

export const Home: React.FC = (): React.ReactElement => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={1}>
				<ul>
					<li>
						<IconButton color="primary">
							<TwitterIcon />
						</IconButton>
						<Typography variant="h6">Главная</Typography>
					</li>
					<li>
						<IconButton color="primary">
							<SearchIcon />
						</IconButton>
						<Typography variant="h6">Поиск</Typography>
					</li>
					<li>
						<IconButton color="primary">
							<NotificationIcon />
						</IconButton>
						<Typography variant="h6">Уведомления</Typography>
					</li>
					<li>
						<IconButton color="primary">
							<EmailIcon />
						</IconButton>
						<Typography variant="h6">Сообщения</Typography>
					</li>
					<li>
						<IconButton color="primary">
							<BookmarkIcon />
						</IconButton>
						<Typography variant="h6">Закладки</Typography>
					</li>
					<li>
						<IconButton color="primary">
							<ListIcon />
						</IconButton>
						<Typography variant="h6">Список</Typography>
					</li>
					<li>
						<IconButton color="primary">
							<UserIcon />
						</IconButton>
						<Typography variant="h6">Профиль</Typography>
					</li>
				</ul>
			</Grid>
			<Grid item xs={7}>
				<Paper>xs</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper>xs</Paper>
			</Grid>
		</Grid>
	)
}
