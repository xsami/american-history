from fabric.api import local


def webpack():
    """
    Clears the /static/bundles folders and re-creates the bundles.

    This should be run every time we made changes to ReactJS before we commit
    and push our code.

    """
    local('rm -rf djreact/static/bundles/local/*')
    local('rm -rf djreact/static/bundles/stage/*')
    local('rm -rf djreact/static/bundles/prod/*')
    local('webpack --config webpack.local.config.js --progress --colors')
    local('webpack --config webpack.stage.config.js --progress --colors')
    local('webpack --config webpack.prod.config.js --progress --colors')
