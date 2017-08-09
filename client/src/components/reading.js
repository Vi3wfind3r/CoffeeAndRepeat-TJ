import React from 'react';
import Navbar from './navbar';
import './reading.css';
import * as actions from '../actions';
import * as Cookies from 'js-cookie';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class Reading extends React.Component {

  componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            this.props.dispatch(actions.getUsers(accessToken));
            this.props.dispatch(actions.fetchQuestions())
        }
    }

  render() {
    return (
      <div>
        <Navbar />
        <p className="reading">
          Lorem ipsum dolor sit amet, sit id atqui euismod offendit, eam ea admodum antiopam. In tamquam sanctus referrentur sed, solum invidunt interpretaris id nec. Eu alia similique est, nec fugit oportere hendrerit ea. At quo possit gloriatur, ea mea facer viderer delectus, aliquip constituto constituam ea mea. Ea has percipitur signiferumque, eu dicam audire mea.

          Ex repudiare assentior eum, sed cu vero movet voluptatum, purto habeo laoreet id vim. Adhuc congue et vix, an discere appellantur per. Eos dicunt laoreet facilisis ei, aliquam consulatu sea te. Ex feugait deseruisse appellantur nec. Has meliore convenire ne. Quo eu hendrerit aliquando.

          In probatus comprehensam mea, quo erat civibus officiis ei. Cibo facilis et vim, sea eu cibo intellegat, vel ei dico partiendo maluisset. Persius facilisis ullamcorper ad per, ne has solum dignissim. Nec alia accusata ei, est nemore corpora in. Cu sit nonumes contentiones, ius ludus convenire ullamcorper an. Euripidis sadipscing intellegebat vis ei, mea quando conceptam disputationi et, ne voluptua perfecto quo.

          Ready to test your knowledge?
        </p>
        <Link to="/questions">
          <button className="test-button">Take me to the test!</button>
        </Link>
      </div>
    )
  }
}

export default connect()(Reading);