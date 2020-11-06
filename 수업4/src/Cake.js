import React from 'react';

// Cake 클래스형 컴포넌트
// <h1>cake 가격 : </h1>
// <h2>할인 가격 :</h2>
// 버튼 누르면 할인 가격이 나오도록 30%할인

class Cake extends React.Component{

    state = {
        cake: 10000,
        discountp: 0,
    };

    discount = () => {
        console.log('할인하기');
        this.setState(current => ({ //current는 this.state
            discountp: current.cake * 0.7,
        }));
    }

    render() {
        return(
            <div>
                <h1>치즈 케이크가격은 {this.state.cake}원 입니다</h1>
                <h2>30% 할인 가격은 {this.state.discountp} 입니다</h2>
                <button onClick={this.discount}>할인</button>
            </div>
        );
    }

}
export default Cake;