export default function Gallery() {
  const [fragments, setFragments] = useState([])

  useEffect(() => {
    fetch('/api/fragments')
      .then(res => res.json())
      .then(data => setFragments(data))
  }, [])

  return (
    <div className="fragment-grid">
      {fragments.map(fragment => (
        <div key={fragment.id} className="fragment">
          <img src={fragment.url} alt={fragment.title} />
          <span>{fragment.views} views</span>
        </div>
      ))}
    </div>
  )
}
