export default function DrugDetails({ ExpandDetail }) {
	return <div>{ExpandDetail === true && <div>drug details</div>}</div>;
}
