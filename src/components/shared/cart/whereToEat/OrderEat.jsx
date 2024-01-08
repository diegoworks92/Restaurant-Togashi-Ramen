import Collection from './Collection';
import Delivery from './Delivery';
import DineHere from './DineHere';

const OrderEat = ({ whereToEat, setWhereToEat, numberWithDecimal }) => {
	let collection = <DineHere numberWithDecimal={numberWithDecimal} />;

	if (whereToEat === 1) {
		collection = <DineHere numberWithDecimal={numberWithDecimal} />;
	}
	if (whereToEat === 2) {
		collection = <Collection numberWithDecimal={numberWithDecimal} />;
	}
	if (whereToEat === 3) {
		collection = <Delivery numberWithDecimal={numberWithDecimal} />;
	}

	return <div>{collection}</div>;
};

export default OrderEat;
