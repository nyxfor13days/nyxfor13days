export default function Sidebar() {
  const posts = [];

  return (
    <aside className="hidden lg:block pl-4 w-full h-full space-y-6 border-l-1 border-l-content2">
      <div className="py-8 px-6 space-y-4 bg-content1 text-content1-foreground rounded-medium">
        <h3 className="headings">Recent Posts</h3>

        {posts.length > 0 ? (
          <ul>
            <li></li>
          </ul>
        ) : (
          <p className="text-content1-foreground/75">Nothing to see...</p>
        )}
      </div>
    </aside>
  );
}
