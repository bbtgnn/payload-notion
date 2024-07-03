export function Header(content: string) {
  return (
    <header className="array-field__header" style={{ marginBottom: '15px' }}>
      <div className="array-field__header-wrap">
        <div className="array-field__header-content">
          <h3 className="array-field__title">
            <span className="field-label unstyled">{content}</span>
          </h3>
        </div>
      </div>
    </header>
  )
}
