import React from 'react'
import { makeStyles, Typography, Button, FormControl, FormGroup, TextField } from '@material-ui/core'
import { Twitter as TwitterIcon } from '@material-ui/icons'
import ModalUI from '../components/ui/ModalUI'

const useStyles = makeStyles( theme => ({
	wrapper: {
		display: 'flex',
		height: '100vh'
	},
	features: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		color: 'white',
		backgroundColor: '#6AC3FD',
		overflow: 'hidden',
	},
	featuresList: {
		position: 'relative',
		listStyleType: 'none',
		'& li': {
			marginBottom: '2rem'
		}
	},
	featuresLogo: {
		position: 'absolute',
		left: '50%',
		top: '45%',
		transform: 'translate(-50%, -50%) scale(80)'
	},
	auth: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		flex: 1,
		'& svg': {
			fontSize: '4rem'
		},
		'& div': {
			padding: '0 15vw',
		}
	},
	authButton: {
		margin: '1rem auto'
	},
}))

export const Auth: React.FC = (): React.ReactElement => {
	const classes = useStyles()
	
	const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>()
	const signInOpen = (): void => setVisibleModal('signIn')
	const signUpOpen = (): void => setVisibleModal('signUp')
	const handleCloseModal = (): void => setVisibleModal(undefined)

	return (
		<div className={classes.wrapper}>
			<section className={classes.features}>
				<TwitterIcon color="primary" className={classes.featuresLogo} />
				<ul className={classes.featuresList}>
					<li>
						<Typography variant="h6">Читайте о том, что вам интересно.</Typography>
					</li>
					<li>
						<Typography variant="h6">Узнайте, о чем говорят в мире.</Typography>
					</li>
					<li>
						<Typography variant="h6">Присоединяйтесь к общению.</Typography>
					</li>
				</ul>
			</section>

			<section className={classes.auth}>
				<div>
					<TwitterIcon color="primary" />
					<Typography variant="h4" style={{ marginBottom: '2rem' }}>Узнайте, что происходит в мире прямо сейчас.</Typography>
					
					<Button className={classes.authButton} variant="contained" color="primary" fullWidth onClick={signUpOpen}>Зарегистрироваться</Button>
					<Button variant="outlined" color="primary" fullWidth onClick={signInOpen}>Войти</Button>
				</div>
			</section>

			<ModalUI title="Войти в Twitter" visible={visibleModal === 'signIn'} onClose={handleCloseModal}>
				<FormControl fullWidth>
					<FormGroup row>
						<TextField
							id="email"
							type="text"
							label="E-Mail"
							margin="normal"
							variant="filled"
							autoFocus
							fullWidth
						/>

						<TextField
							id="password"
							type="password"
							label="Password"
							margin="normal"
							variant="filled"
							autoFocus
							fullWidth
						/>
					</FormGroup>
				</FormControl>
			</ModalUI>

			<ModalUI title="Создайте учетуню записать" visible={visibleModal === 'signUp'} onClose={handleCloseModal}>
				<FormControl fullWidth>
					<FormGroup row>
						<TextField
							id="name"
							type="text"
							label="Name"
							margin="normal"
							variant="filled"
							autoFocus
							fullWidth
						/>

						<TextField
							id="email"
							type="text"
							label="E-Mail"
							margin="normal"
							variant="filled"
							autoFocus
							fullWidth
						/>
						
						<TextField
							id="password"
							type="password"
							label="Password"
							margin="normal"
							variant="filled"
							autoFocus
							fullWidth
						/>
					</FormGroup>
				</FormControl>
			</ModalUI>
		</div>
	)
}
