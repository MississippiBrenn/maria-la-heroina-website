import { Component } from 'react';
import '../css/Banner.css';
import MariaImage from '../images/indigenousMaria.jpg'

class Banner extends Component {
    render() {
        return (
            <div>
                <h1 className='introHeader'>Working with Maria</h1>
                <div className='introblock'>
                    <img src={MariaImage} alt='indigenous maria with arms outstretched' />
                    <ul className='instructions'>
                        <li>Thank Maria for all the work that she has done</li>
                        <li>Experience thoughts of joy and hope for the work Maria has accomplished</li>
                        <li>Take a few moments to silently or outloud tune in and express your how much her work has meant to you </li>
                        <li><h2>After positively tuning our experience to the space of Maria, we are ready to continue</h2> </li>
                        <li>Pick a tab - you can search by missing case or by unidentified </li>
                        <li>Enter in your search criteria for distance of cases and race</li>
                        <li>Maria already has filtered the data based on age and date missing</li>
                        <li>If you do not fill in a case number, Maria will return all possible matches for your search criteria</li>
                        <li>Optional: Enter in the NAMUS case for the woman you are looking for</li>
                        <li>You now have a table with all potential matches from Namus</li>
                        <li><h2>When you finish your work please close any tabs you have open utilising Maria and allow her to rest</h2></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Banner;