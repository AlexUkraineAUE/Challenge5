import "./styles.css";

function Park({
  commonName,
  botanicalName,
  neighbourhood,
  diameterAtBreastHeight,
  treeId
}) {
  return (
    <div>
      <details>
        <summary>{treeId}</summary>
        <div>
          <p>
            <sup>Common Name: {commonName}</sup>
            <sup>Botanical Name: {botanicalName}</sup>
            <sup>Neighbourhood: {neighbourhood}</sup>
            <sup>Diameter at Breast: {diameterAtBreastHeight}</sup>
          </p>
        </div>
      </details>
    </div>
  );
}

// App renders one Park component per park.
export default function App({ parks }) {
  return (
    <div>
      <h1>Winnipeg Trees</h1>
      {parks.map((park, i) => (
        <Park
          key={i}
          commonName={park.common_name}
          botanicalName={park.botanical_name}
          neighbourhood={park.neighbourhood}
          diameterAtBreastHeight={park.diameter_at_breast_height}
          treeId={park.tree_id}
        />
      ))}
    </div>
  );
}
