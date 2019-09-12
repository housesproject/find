import React from 'react';
import { Link } from 'react-router-dom';

import './footer.styles.scss';

const Fotter = () => (
	<footer id="footer" className=''>
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-md-4">
					<h1>Find</h1>
				</div>
				<div className="col-md-8">
					<ul className="row">
						<li className='col-md-3'><Link>Home</Link></li>
						<li className='col-md-3'><Link>Post</Link></li>
						<li className='col-md-3'><Link>Sign In</Link></li>
						<li className='col-md-3'><Link>Sign Up</Link></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="social text-center">
						<li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="" target="_blank">Find</a></p>
				</div>
			</div>	
		</div>
	</footer>
);

export default Fotter;