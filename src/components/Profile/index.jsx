import 'components/Profile/index.module.css';
const { Component } = require("react");

class Profile extends Component {
    render() {
        return <div className="profile">
            <div className="description">
                <img
                    src={this.props.avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{this.props.username}</p>
                <p className="tag">{this.props.tag}</p>
                <p className="location">{this.props.location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{this.props.stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{this.props.stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{this.props.stats.likes}</span>
                </li>
            </ul>
        </div>
    }
}

export default Profile;