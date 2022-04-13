import './style.css';

const Stats = ({ all, readBooks, notReadBooks, onRemoveAll }) => {
	return (
		<div className='tab-group-root'>
			<div className='tab-item-root'>
				<span className='all'>All {all}</span>
				<span className='not-read'>In-progress {notReadBooks}</span>
				<span className='read'>Completed {readBooks}</span>
			</div>
			<button className='tab-item-main' onClick={onRemoveAll}>
				Remove all
			</button>
		</div>
	);
};

export default Stats;
