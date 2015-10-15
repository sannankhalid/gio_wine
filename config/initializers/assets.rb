# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

Rails.application.config.assets.precompile += %w(
                                                  leaflet.awesome-markers.css
                                                  bootstrap.css
                                                  bootstrap.js
                                                  underscore-min.js
                                                  leaflet.awesome-markers.js
                                                  leaflet.smoothmarkerbouncing.js
                                                  wine.js
                                                  bootstrap-modal-carousel.js
                                                  bootstrap-modal-carousel.css

                                                  calendar.css
                                                  contact.css
                                                  index.css
                                                  news.css
                                                  press.css
                                                  wine.css
                                                  winefrance.css


                                                  calendar.js
                                                  contact.js
                                                  index.js
                                                  news.js
                                                  press.js
                                                  wine.js
                                                  winefrance.js

                                                )

Rails.application.config.assets.precompile += %w( .svg .eot .woff .ttf)


# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
