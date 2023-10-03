
const newsItems = [
  "Breaking news 1",
  "Important update 2",
  "Exciting announcement 3",
  // Add more news items as needed
];

const NewsTicker = () => {
  return (
    <div className="news-ticker bg-gray-900 flex items-center justify-center py-2 text-white">
      <div className="ticker-container overflow-hidden">
        {newsItems.map((item, index) => (
          <div key={index} className="ticker-item mr-8 inline-block">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
