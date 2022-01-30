import './ViewData.css';

function ViewData() {
  return (
    <div className="ViewData">
      <header className="ViewData-header">
        <p>
          a simple page to view some data
        </p>
        <p>
          coming soon:
          <li> view by year </li>
          <li> view by category </li>
          <li> view count </li>
          <li> view percent </li>
          <li> view both </li>
        </p>
        <a
          className="ViewData-link"
          href="https://www.cps.edu/about/district-data/demographics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          source
        </a>
      </header>
    </div>
  );
}

export default ViewData;
