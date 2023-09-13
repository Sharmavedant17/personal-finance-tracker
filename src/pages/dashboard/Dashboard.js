import React from 'react';

const Dashboard = ({data}) => {
    const finalData = [];
    const financeData = data.split("_");
    financeData.forEach(element => {
        const res = element.split("-");
        finalData.push(res[1])
    });

    return(
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "30px"
        }}>
            <div style={{
                padding: "25px 50px",
                margin: "10px",
                borderRadius: "3px",
                color: "white",
                backgroundColor: "#f95a7f"
            }}>
                <div style={{
                    fontSize: "24px",
                    fontWeight: "500"
                    }}>Total Income</div>
                <div style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    marginTop: "10px"
                    }}>{finalData[0]}</div>
            </div>
            <div style={{
                padding: "25px 50px",
                margin: "10px",
                borderRadius: "3px",
                color: "white",
                backgroundColor: "#3ed856"
            }}>
                <div style={{
                    fontSize: "24px",
                    fontWeight: "500"}}>Total Expenses</div>
                <div style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    marginTop: "10px"
                    }}>{finalData[1]}</div>
            </div>
            <div style={{
                padding: "25px 50px",
                margin: "10px",
                borderRadius: "3px",
                color: "white",
                backgroundColor: "#bf83ff"
            }}>
                <div style={{
                    fontSize: "24px",
                    fontWeight: "500"}}>Total Balance</div>
                <div style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    marginTop: "10px"
                    }}>{finalData[2]}</div>
            </div>
        </div>
    )
}


export default Dashboard