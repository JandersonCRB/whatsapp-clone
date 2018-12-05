import React, { Component } from 'react';

import firebase from 'firebase';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search';

// let chats = [
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// 	{ photoURL: require('./avatar.jpg'), displayName: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
// ]

class Main extends Component {
	state = {
		chats: [],
		msg: '',
		currentChat: null,
	}

	active = index => {
		this.setState({ currentChat: index });
	}

	componentDidMount() {
		const db = firebase.firestore();
		db.collection("users").get()
			.then(snapshot => {
				const chats = snapshot.docs.map(user => user.data());
				this.setState({ chats });
			})
	}
	

	render() {
		const { currentChat, chats, msg } = this.state;
		console.log(chats)
		return (
			<Grid container style={{ maxHeight: '100vh' }}>
				<Grid container item xs={4} style={{ height: '100%' }}>
					<header style={{ height: 59, width: '100%', backgroundColor: '#eeeeee', boxShadow: '2px 1px rgba(0,0,0,0.12)' }}>
						<Grid container alignItems="center" style={{ height: '100%', padding: "10px 16px" }}>
							{/* TODO: MAKE IT A LINK */}
							<Avatar src={require('./avatar.jpg')} />
							<div style={{ marginLeft: 'auto'}}>
								<IconButton>
									<MessageIcon style={{ fill: '#263238', fillOpacity: '0.6' }}/>
								</IconButton>
								<IconButton style={{ marginLeft: 10 }}>
									<MoreVertIcon style={{ fill: '#263238', fillOpacity: '0.6' }}/>
								</IconButton>
							</div>
						</Grid>
					</header>
					<Grid container alignItems="center" style={{ height: 49, backgroundColor: '#f0f0f0', opacity: 0.7, boxShadow: '0 1px rgba(0,0,0,0.12)', padding: "10px 7px" }}>
						<label style={{ height: '100%', width: '100%', border: '1px solid #e0e0e0', backgroundColor: '#fbfbfb', borderRadius: 5 }}>
							<Grid container direction="row" alignItems="center" wrap="nowrap" style={{ height: '100%', paddingLeft: 15 }}>
								<ButtonBase style={{ marginRight: 25 }}>
									<SearchIcon style={{ fontSize: 16, fill: '#263238', fillOpacity: '0.6' }} />
								</ButtonBase>
								<input placeholder="Procurar ou começar uma nova conversa" style={{ height: '100%', width: '100%', outline: 'none', border: 'none' }}/>
							</Grid>
						</label>
					</Grid>
					<Grid container direction="row" style={{ maxHeight: 'calc(100vh - 108px)', overflow: 'auto' }}>
						{chats.map((chat, index) => (
							<ButtonBase key={index} onClick={_ => this.active(index)} disableRipple component={Grid} container direction="row" wrap="nowrap" alignItems="center" style={{ height: 72, maxWidth: '100%', overflow: 'hidden' }}>
								<div style={{ width: 68, paddingLeft: 13, paddingRight: 15 }}>
									<Avatar src={chat.photoURL} />
								</div>
								<Grid container direction="column" style={{ height: '100%', maxWidth: 'calc(100% - 68px)', borderTop: '1px solid #f2f2f2', paddingRight: 15, paddingTop: 10 }}>
									<Grid container direction="row">
										<Typography noWrap style={{ fontSize: 16, fontWeight: 500 }}>
											{chat.displayName}
										</Typography>
									</Grid>
									<Grid container direction="row" style={{ marginTop: 3 }}>
										<Typography noWrap style={{ fontSize: 14, fontWeight: 300, opacity: 0.6 }}>
											{chat.lastMsg}
										</Typography>
									</Grid>
								</Grid>
							</ButtonBase>
						))}
					</Grid>
				</Grid>
				<Grid item xs={8} style={{ height: '100vh', backgroundColor: 'purple'}}>
					{currentChat !== null && chats[currentChat].displayName}
					<TextField value={msg} onChange={e => this.setState({ msg: e.target.value })} />
					<Button variant="contained" onClick={_ =>{
						const db = firebase.firestore();
						console.log(this.props.user)
						db.collection('messages').add({
							from: this.props.user.uid,
							to: chats[currentChat].uid,
							message: msg,
						})
					}}/>
				</Grid>
			</Grid>
		);
	}
}

export default Main;