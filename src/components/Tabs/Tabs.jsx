export const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <>
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === activeTab).title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={activeTab === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  key={tab.id}
                  onClick={() => onTabClick(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>{tabs.find(tab => tab.id === activeTab).content}</div>
      </div>
    </>
  );
};
