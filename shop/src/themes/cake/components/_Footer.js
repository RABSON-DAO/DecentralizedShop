import React from 'react'
import get from 'lodash/get'
import useConfig from 'utils/useConfig'
import useThemeVars from 'utils/useThemeVars'
import SocialLinks from 'components/SocialLinks'

const Footer = () => {
  const { config } = useConfig()
  const themeVars = useThemeVars()
  const relativeLogoPath = get(themeVars, 'header.logo.0.url')
  const logoUrl = `${config.dataSrc}${relativeLogoPath}`

  return (
    <div className="text-center bg-footer">
      <div className="border-t mt-24" />

      <div className="container pt-16 pb-16 sm:pb-48">
        <div className="text-center text-xl font-bold mb-10">
          {relativeLogoPath ? (
            <img className="mx-auto" style={{ width: 120 }} src={logoUrl} />
          ) : (
            config.title
          )}
        </div>
        <div className="mb-10">
          <SocialLinks
            className="social text-link"
            svg={{ className: 'inline-block mx-3', height: 24 }}
          />
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row text-red-500 justify-center text-link">
            <li className="pb-4 sm:mr-10">
              <a href="#">FAQ</a>
            </li>
            <li className="pb-4 sm:mr-10">
              <a href="#">About Rabson</a>
            </li>
            <li className="pb-4 sm:mr-10">
              <a href="#">Visit Rabson</a>
            </li>
            <li className="pb-4">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row pb-8 sm:pb-0 justify-center text-secondary">
          <div className="mr-10">Powered by Rabson Dshop</div>
          <div>© 2021 Rabson Protocol</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
