import { formatDistance } from 'date-fns'
import ruLang from 'date-fns/locale/ru'

function formatDate(date: Date): string {
	return formatDistance(date, new Date(), { locale: ruLang })
}

export default formatDate
