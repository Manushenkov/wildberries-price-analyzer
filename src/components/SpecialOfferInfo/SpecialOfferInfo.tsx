import './SpecialOfferInfo.scss'
import { h } from 'dom-chef'
import { cn as classnames } from '@bem-react/classname'
import companyIcon from '../../img/companyIcon'

const React = h

const cn = classnames('inject-special-offer')

interface SpecialOfferInfoProps {
	discount?: number
	preDiscount: number
}

export default function SpecialOfferInfo({ discount, preDiscount }: SpecialOfferInfoProps) {
	return (
		<div className={cn('container')}>
			<div className={cn('content')}>
				<img className={cn('company-icon')} src={companyIcon} />
				<b className={cn('title')}>СПП:</b>
				<b className={cn('amount')}>{discount || 0}%</b>
				<span className={cn('pre-offer-title')}>До СПП:</span>
				<span className={cn('pre-offer-amount')}>{preDiscount / 100}₽</span>
			</div>
		</div>
	)
}
