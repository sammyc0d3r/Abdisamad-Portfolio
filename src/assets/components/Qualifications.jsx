import './Qualifications.css'

export default function Qualifications(props) {
    return (
        <div className="Qualifications-Container">
                    <ul>
                        <li>{props.List1}</li>
                        <li>{props.List2}</li>
                    </ul>
                </div>
    )
}