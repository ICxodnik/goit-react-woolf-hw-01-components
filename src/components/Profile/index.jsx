import css from 'components/Profile/index.module.css';
const { Component } = require("react");

class Profile extends Component {
    render() {
        return <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={this.props.avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{this.props.username}</p>
                <p className={css.tag}>@{this.props.tag}</p>
                <p className={css.location}>{this.props.location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{this.props.stats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{this.props.stats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{this.props.stats.likes}</span>
                </li>
            </ul>
        </div>
    }
}

export default Profile;