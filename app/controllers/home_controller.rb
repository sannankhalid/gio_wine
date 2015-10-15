class HomeController < ApplicationController
  layout "application"

  def wake_up
    # regularly called by new_relic to test the website is responding
    # Also keeo the dyno awake (if we are only using one)
    render nothing: true
  end

  def index
    @title = t('title.index')
  end

  def wine
    @title = t('giowine') + ' > ' + t('title.wine')
  end

  def contact
    @title = t('giowine') + ' > ' + t('title.contact')
  end

  def press
    @title = t('giowine') + ' > ' + t('title.press')
  end

  def news
    @title = t('giowine') + ' > ' + t('title.news')
  end

  def calendar
    @title = t('giowine') + ' > ' + t('title.calendar')
  end

  def winefrance
    @title = t('giowine') + ' > ' + t('title.winefrance')
  end

end
