export default function MyButton({ buttonList }) {
    return (
        <div>
            {buttonList.map((button, index) => {
                let className = "";

                if (button === "Primary") {
                    className = "primary";
                } else if (button === "Secondary") {
                    className = "secondary";
                } else if (button === "Danger") {
                    className = "danger";
                } else if (button === "Success") {
                    className = "succes"; // Fixed typo
                }

                return (
                    <div key={index} >
                        <button className={className} >{className}</button>
                    </div>
                ); 
            })}
        </div>
    );
}
