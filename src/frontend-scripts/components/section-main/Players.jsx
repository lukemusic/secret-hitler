import React from 'react';
// import $ from 'jquery';

export default class Players extends React.Component {
	constructor() {
		super();
		this.clickedTakeSeat = this.clickedTakeSeat.bind(this);
	}

	// componentDidMount() {

	// }

	renderPlayers() {
		return this.props.gameInfo.seatedPlayers.map((player, i) => {
			return (
				<div key={i} className="player-container">
					<div
						// onClick={this.handlePlayerClick}
						className={
						(() => {
							return 'player-name';
						})()
					}
					>{player.userName}</div>
				</div>
			);
		});
	}

	renderTakeSeat() {
		const {userInfo, gameInfo} = this.props;

		if (!userInfo.seatNumber && !gameInfo.gameState.isStarted) {
			return <div className="ui left pointing label" onClick={this.clickedTakeSeat}>Take a seat</div>;
		}
	}

	clickedTakeSeat() {
		this.props.onClickedTakeSeat();
	}

	render() {
		return (
			<section className="players">
				{this.renderPlayers()}
				{this.renderTakeSeat()}
				<div className="ui basic small modal signinnag" ref={c => {
					this.signinModal = c;
				}}>
					<div className="ui header">You will need to sign in or sign up for an account to play.</div>
				</div>
			</section>
		);
	}
}

Players.propTypes = {
	roles: React.PropTypes.array,
	userInfo: React.PropTypes.object,
	gameInfo: React.PropTypes.object,
	roleState: React.PropTypes.string,
	selectedGamerole: React.PropTypes.func
};