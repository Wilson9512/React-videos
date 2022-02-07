import React from "react";


//ui segment外框
//先將輸入的內容變可控 才能將掛上狀態
class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = event => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();

        //TODO: 要確定從父組件叫回呼
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className=" search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;