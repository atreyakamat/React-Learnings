export default function TabButton({children, onSelect /* this name is upto you*/, isSelected}) {
    // document.querySelector('menu').addEventListener('click', (event) => {
    // }); --> usinn in normal js for button
    //in react its done in a diff way;
    return( <li>
    <button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button>
    </li>
    );
}