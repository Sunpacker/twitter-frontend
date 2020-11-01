import React from 'react'
import { IconButton } from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

const BackButton: React.FC = (): React.ReactElement => {
	const history = useHistory()
	const historyBack = () => history.goBack()

	return (
		<IconButton onClick={historyBack} color="primary">
			<ArrowBackIcon />
		</IconButton>
	)
}

export default BackButton
